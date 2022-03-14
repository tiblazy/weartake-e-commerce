--Fluxograma

Home
   Filtrar por pesquisa  
      ou
   Pesquisar produto por nome, campo de busca
   
   Clicar em um produto
      Adicionar ao carrinho de compras
         se houver item pode   
      Remover o produto do carrinho de compras
         Confirmar remoção de produto

--Componentes

Home
   import googleFonts: roboto

   body (font-family: roboto)

   header (height: 70px)
      nav 
         h1 - logo (font-weight: bold) 
         ul - listFilter (list-style-type: none)
         li - productFilter(font-weight: semi bold, transition: transform: .5s)
              productFilter:hover (transition: transform 1.5s, transform: scale(1.1))
   
   main
      section - card (height: 380px)
         article - cardOrientation 
            figure - cardProductHeader (height: 154px)
               img - cardProductImage (height: 98%, center, transition: transform 1.5s,)
                     cardProductImage:hover (transition: transform 1.5s, transform: scale(1.1))
            
            article - cardProductBody (height: 215px)
               div - productType (height: 26px)
               h2 - productName (font-weight: bold)
               p - productDesc
               p - productPrice 
               small -  productAdd (text-decoration: underline)
                        productAdd:hover

      aside
         form -  productForm
            input - productSearch
            button - productGet
         
         section - cartSection
            div - cart 
               h2 - cartTitle (font-weight: bold)
            div - cartBox 

Sem item adicionado:
               h2 - cartBoxTitle 
               p - cartBoxParagraph 

Com item adicionado:
               div - cartBoxProduct
                   figure - cartBoxFigure 
                      img - cartBoxImage
                   div - cartBoxDirection 
                       h3 - cartBoxTitle2 (font-weight: bold)
                      small - cartBoxPrice
                      small - cartBoxRemove
                              cartBoxRemove:hover

            button - cartResult
               div - cartResultDiv
                  p - cartText 
                  p - cartNumber 
               
               div - cartResultDiv
                  p - cartTotal
                  p - cartPriceTotal 
               
                  cartResult:hover

Fonts Tamanhos :
    Logo (30px)
    boxTitle (22px)
    productName, CartTitle (18px)
    productFilter, cartText, cartNumber, cartTotal, cartPriceTotal (16px)
    productDesc, productPrice, boxPrice, boxRemove  (12px)

Cores de Fundo :
    productType (#2E245E)
    cartResult:hover (#228C22)
    productGet, cart (#6B54DE)
    cardProductHeader, productSearch, cartBox (#F5F5F5)
    cartBoxRemove (#710C04)
    cartResult (#333333)

Cores de texto:
    Logo (#000000)
    productFilter:hover, cartBoxPrice, productPrice (#2E245E)
    productType, productGet, cart, cartText, cartTotal (#FFFFFF)
    productAdd:hover (#228C22)
    productAdd, productDesc, cartBoxParagraph, cartBoxRemove, cartNumber, cartPriceTotal (#828282) 

Margin ao Body: 0 115px

--Javascript

   <!-- 
      Pegar uma coleção de objetos
      Listar objetos
   -->
   function listarProduto()

   <!--  
      Pegar uma coleção de objetos
      Filtrar por tipo de produto desejado
   -->
   function filtrarProduto()

   <!--  
      Pegar uma coleção de objetos
      Procurar por um nome de produto desejado
      se encontrado retornar produto
   -->
   function procurarProduto()

   <!--  
      Clica em adicionar um produto
      Adiciona o produto a lista de compra
   -->
   function adicionarProduto()

   <!--  
      Clica em remover um produto
      Confirmar se quer mesmo remover o produto
      se sim, remover produto
      se não, cancelar remoção
   -->
   function removerProduto()

   <!-- 
      Clica em confirmar compra
      Redireciona para compra realizada
    -->
   function confirmarCompra()