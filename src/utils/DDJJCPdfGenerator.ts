import jsPDF from 'jspdf';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface DDJJCData {
    id: string;
    producer: string;
    period: string;
    crops: {
        lote: string;
        cultivo: string;
        superficieTotal: string;
        desde: string;
        hasta: string;
    }[];
    timestamp: string;
    plot: string;
    canal: string;
}

export const generateDDJJCPdf = (data: DDJJCData) => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    // Header
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('IDEVI - Instituto de Desarrollo del Valle Inferior', pageWidth / 2, 20, { align: 'center' });

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('Declaración Jurada de Cultivos', pageWidth / 2, 28, { align: 'center' });
    doc.text(`Periodo Agrícola: ${data.period}`, pageWidth / 2, 34, { align: 'center' });

    // Line separator
    doc.setLineWidth(0.5);
    doc.line(20, 40, pageWidth - 20, 40);

    // Producer Info
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('INFORMACIÓN DEL PRODUCTOR Y PARCELA', 20, 50);

    doc.setFont('helvetica', 'normal');
    let yPos = 60;
    const lineHeight = 7;

    doc.text(`Productor: ${data.producer}`, 20, yPos);
    doc.text(`Parcela: ${data.plot}`, 120, yPos);
    yPos += lineHeight;
    doc.text(`Canal de Servicio: ${data.canal}`, 20, yPos);
    doc.text(`Fecha de Declaración: ${format(new Date(data.timestamp), "d 'de' MMMM, yyyy - HH:mm", { locale: es })} hs`, 120, yPos);

    // Crops Table
    yPos += 15;
    doc.setFont('helvetica', 'bold');
    doc.text('DETALLE DE CULTIVOS', 20, yPos);

    yPos += 8;
    // Table Headers
    const headers = ['Lote', 'Cultivo', 'Sup. (ha)', 'Desde', 'Hasta'];
    const colWidths = [20, 60, 30, 35, 35];
    let xPos = 20;

    // Draw header background
    doc.setFillColor(240, 240, 240);
    doc.rect(20, yPos - 5, pageWidth - 40, 8, 'F');

    headers.forEach((header, i) => {
        doc.text(header, xPos, yPos);
        xPos += colWidths[i];
    });

    // Table Body
    doc.setFont('helvetica', 'normal');
    yPos += 8;

    data.crops.forEach((crop) => {
        xPos = 20;
        doc.text(crop.lote.toString(), xPos, yPos); // lote
        xPos += colWidths[0];
        doc.text(crop.cultivo, xPos, yPos); // cultivo
        xPos += colWidths[1];
        doc.text(crop.superficieTotal.toString(), xPos, yPos); // sup
        xPos += colWidths[2];
        doc.text(format(new Date(crop.desde), 'dd/MM/yyyy'), xPos, yPos); // desde
        xPos += colWidths[3];
        doc.text(format(new Date(crop.hasta), 'dd/MM/yyyy'), xPos, yPos); // hasta

        yPos += 7;
    });

    // Footer / Legal
    yPos += 20;
    doc.setLineWidth(0.2);
    doc.rect(20, yPos, pageWidth - 40, 30);

    doc.setFontSize(8);
    doc.text('Declaración Jurada', 25, yPos + 6);
    doc.setFont('helvetica', 'italic');
    const legalText = doc.splitTextToSize('Por la presente declaro que los datos consignados en este formulario son veraces y exactos. Me comprometo a informar cualquier modificación a la Gerencia Técnica del IDEVI dentro de los plazos establecidos.', pageWidth - 50);
    doc.text(legalText, 25, yPos + 12);

    // Signature placeholders
    yPos += 60;
    doc.setLineWidth(0.5);
    doc.line(30, yPos, 80, yPos);
    doc.text('Firma del Productor', 35, yPos + 5);

    doc.line(130, yPos, 180, yPos);
    doc.text('Firma y Sello IDEVI', 140, yPos + 5);

    // ID Stamp
    doc.setFontSize(8);
    doc.setTextColor(150);
    doc.text(`ID Transacción: ${data.id}`, pageWidth - 60, 10);

    doc.save(`DDJJC_${data.plot}_${data.period.replace('/', '-')}.pdf`);
};
