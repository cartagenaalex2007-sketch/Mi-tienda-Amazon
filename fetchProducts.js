const amazonPaapi = require('amazon-paapi');
const fs = require('fs');

// Configuración común
const commonParameters = {
  AccessKey: "AKIAIOSFODNN7EXAMPLE",       // Tu Access Key ID
  SecretKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY", // Tu Secret Access Key
  PartnerTag: "101822082007-20",           // Tu Partner Tag de afiliado
  PartnerType: "Associates",
  Marketplace: "www.amazon.com"
};

// Función para buscar productos por categoría
async function fetchCategoryProducts(keyword, searchIndex, categoryId) {
  const requestParameters = {
    Keywords: keyword,
    SearchIndex: searchIndex,
    Resources: [
      "Images.Primary.Medium",
      "ItemInfo.Title",
      "Offers.Listings.Price",
      "DetailPageURL"
    ]
  };

  try {
    const data = await amazonPaapi.SearchItems(commonParameters, requestParameters);
    const items = data.SearchResult.Items;

    const htmlProducts = items.map(item => {
      const title = item.ItemInfo.Title.DisplayValue;
      const image = item.Images.Primary.Medium.URL;
      const price = item.Offers.Listings[0].Price.DisplayAmount;
      const url = item.DetailPageURL;

      return `
        <div class="producto ${categoryId}">
          <img src="${image}" alt="${title}">
          <h3>${title}</h3>
          <p>${price}</p>
          <a href="${url}" target="_blank">Comprar en Amazon</a>
        </div>
      `;
    }).join("\n");

    return htmlProducts;
  } catch (error) {
    console.error("Error al traer productos:", error);
    return "";
  }
}

// Función principal
(async () => {
  const ropa = await fetchCategoryProducts("ropa deportiva", "Apparel", "ropa");
  const tecnologia = await fetchCategoryProducts("laptops", "Electronics", "tecnologia");
  const hogar = await fetchCategoryProducts("cocina", "Kitchen", "hogar");
  const gaming = await fetchCategoryProducts("gaming", "VideoGames", "gaming");
  const belleza = await fetchCategoryProducts("skincare", "Beauty", "belleza");

  const template = `
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Tienda Amazon Afiliados</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <header>
      <div class="logo">Mi Tienda Online</div>
      <nav id="menu">
        <a href="#">Inicio</a>
        <a href="#ropa">Ropa</a>
        <a href="#tecnologia">Tecnología</a>
        <a href="#hogar">Hogar</a>
        <a href="#gaming">Gaming</a>
        <a href="#belleza">Belleza</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <button class="menu-toggle">☰</button>
    </header>

    <main id="categorias">
      <section class="productos" id="ropa">
        <h2>🧥 Ropa</h2>
        <div class="slider">${ropa}</div>
      </section>

      <section class="productos" id="tecnologia">
        <h2>💻 Tecnología</h2>
        <div class="slider">${tecnologia}</div>
      </section>

      <section class="productos" id="hogar">
        <h2>🏠 Hogar</h2>
        <div class="slider">${hogar}</div>
      </section>

      <section class="productos" id="gaming">
        <h2>🎮 Gaming</h2>
        <div class="slider">${gaming}</div>
      </section>

      <section class="productos" id="belleza">
        <h2>🧴 Belleza</h2>
        <div class="slider">${belleza}</div>
      </section>
    </main>

    <footer id="contacto">
      <p>© 2026 Mi Tienda Online | Soy afiliado de Amazon y puedo recibir comisiones por las compras realizadas.</p>
    </footer>
    <script src="script.js"></script>
  </body>
  </html>
  `;

  fs.writeFileSync("index.html", template);
  console.log("✅ index.html actualizado con productos nuevos de Amazon");
})();
