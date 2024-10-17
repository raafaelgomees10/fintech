import resumo from "../../assets/icons/resumo.svg";
import vendas from "../../assets/icons/vendas.svg";
import webhooks from "../../assets/icons/webhooks.svg";
import configuracoes from "../../assets/icons/configuracoes.svg";
import contato from "../../assets/icons/contato.svg";
import sair from "../../assets/icons/sair.svg";
import FintechSVG from "../../assets/FintechSVG";

const Menu = () => {
  return (
    <nav className="sidenav box bg3">
      <FintechSVG title="Fintech Logo" />
      <ul>
        <li>
          <span>
            <img src={resumo} alt="menu icon" />
          </span>
          <a href="">Resumo</a>
        </li>
        <li>
          <span>
            <img src={vendas} alt="menu icon" />
          </span>
          <a href="">Vendas</a>
        </li>
        <li>
          <span>
            <img src={webhooks} alt="menu icon" />
          </span>
          <a>WebHooks</a>
        </li>
        <li>
          <span>
            <img src={configuracoes} alt="menu icon" />
          </span>
          <a>Configurações</a>
        </li>
        <li>
          <span>
            <img src={contato} alt="menu icon" />
          </span>
          <a>Contato</a>
        </li>
        <li>
          <span>
            <img src={sair} alt="menu icon" />
          </span>
          <a>Sair</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
