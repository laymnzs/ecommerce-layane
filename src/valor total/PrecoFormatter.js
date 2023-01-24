import produto from "../produtos/Produtos.json"

//convertendo valor (R$)
export const precoFormatter = new Intl.NumberFormat('pt-BR',{

    style: 'currency',
    currency: 'BRL',
  });
  
  <div className="media">
  <h1>{produto.preco * precoFormatter / 10}</h1>
  </div>
