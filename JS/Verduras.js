function sendToWhatsApp() {
    const productName = "Verduras";
    const phoneNumber = "51908876927"; // Número de WhatsApp del negocio

    // Crear el mensaje dinámicamente, sin incluir cantidad
    const message = `Hola, quisiera saber qué tipo de ${productName} están vendiendo.`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    // Redirigir al enlace de WhatsApp con el mensaje dinámico
    window.open(whatsappUrl, '_blank');
}
