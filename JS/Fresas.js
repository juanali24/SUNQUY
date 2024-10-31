function sendToWhatsApp() {
    const productName = "Fresas";
    const quantity = document.getElementById("productQuantity").value;
    const phoneNumber = "51908876927"; // Reemplaza con el número de WhatsApp del negocio

    // Crear el mensaje dinámicamente con la cantidad elegida
    const message = `Hola, quisiera pedir una cotización para ${quantity} unidades de ${productName}.`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    // Redirigir al enlace de WhatsApp con la cantidad dinámica
    window.open(whatsappUrl, '_blank');
}
