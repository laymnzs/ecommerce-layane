import { HeaderContainer } from "./Header.styled"
import logo from "../../logo/astrodev.png"
import lupaIcone from "../../icones/lupa.svg"
import carrinhoIcone from "../../icones/carrinho.svg"
import camisetaIcone from "../../icones/camiseta.png"
import ouvidoriaIcone from "../../icones/ouvidoria.png"

function Header(props) {

  const {
    paginaCarrinho, 
    paginaProdutos, 
    paginaContato,
    itensNoCarrinho,
    filtraTexto,
    onChangeFiltraTexto,
    ordena,
    onChangeOrdena
  } = props
  //console.log(props)

    return (
      <HeaderContainer>
        
    {/* LOGO */} 
    <div className="logo">
   <img src={logo} width="150px" alt="Logo Astrodev" />
   </div>

   
  <div>
    <input className="pesquisar" 
    placeholder="Pesquisar"
    value={filtraTexto}  
    onChange={onChangeFiltraTexto} />


<div className="filtrar">
<p>Filtrar por</p>
<p>Menor Preço:</p>
<input type="number" class="filtro" placeholder="R$ 20.00" value=""/>
<p>Maior Preço:</p>
<input type="number" class="input" placeholder="R$ 50.90" value=""/>
</div>

<div>
<select class="ordena">
<option value="" className="ordena">Ordenar por</option>
<option value="Maior" className="ordena">Preço: do maior para o menor</option>
<option value="Menor" className="ordena">Preço: do menor para o maior</option>
</select>
</div>


    
    <div className="button-lupa">
    <button button-lupa>
        <img src={lupaIcone} width="30px" alt="Lupa Icone"/>
    </button>
    </div>
    </div>

    <div className="button-grupo">
        <button onClick={paginaProdutos}>
        <img src={camisetaIcone} width="40px" alt="Camiseta Icone" />
        </button>

        <button onClick={paginaCarrinho} className="botao-carrinho">
        <img src={carrinhoIcone} width="40px" alt="Carrinho Icone" />
        
        {/* só irá mostrar o número de itens no carrinho se for maior que 0 */}
        <span className="itens-carrinho">{itensNoCarrinho > 0 && itensNoCarrinho}</span>

        </button>

        <button onClick={paginaContato}>
        <img src={ouvidoriaIcone} width="40px" alt="Carrinho Icone" />
        </button>
    </div>

      </HeaderContainer>
      
    );
  }
  
  export default Header;
  