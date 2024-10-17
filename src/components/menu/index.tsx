import * as S from "./styles";
import { NavLink } from "react-router-dom";
import sair from "../../assets/icons/sair.svg";
import FintechSVG from "../../assets/FintechSVG";
import resumo from "../../assets/icons/resumo.svg";
import vendas from "../../assets/icons/vendas.svg";
import contato from "../../assets/icons/contato.svg";
import webhooks from "../../assets/icons/webhooks.svg";
import configuracoes from "../../assets/icons/configuracoes.svg";

const Menu = () => {
  return (
    <S.SideNav className="sidenav box bg3">
      <FintechSVG title="Fintech Logo" />
      <S.List>
        <S.Item>
          <S.Span>
            <img src={resumo} alt="menu icon" />
          </S.Span>
          <NavLink to="/">Resumo</NavLink>
        </S.Item>

        <S.Item>
          <S.Span>
            <img src={vendas} alt="menu icon" />
          </S.Span>
          <NavLink to="/vendas">Vendas</NavLink>
        </S.Item>

        <S.Item>
          <S.Span>
            <img src={webhooks} alt="menu icon" />
          </S.Span>
          <a>WebHooks</a>
        </S.Item>

        <S.Item>
          <S.Span>
            <img src={configuracoes} alt="menu icon" />
          </S.Span>
          <a>Configurações</a>
        </S.Item>

        <S.Item>
          <S.Span>
            <img src={contato} alt="menu icon" />
          </S.Span>
          <a>Contato</a>
        </S.Item>

        <S.Item>
          <S.Span>
            <img src={sair} alt="menu icon" />
          </S.Span>
          <a>Sair</a>
        </S.Item>
      </S.List>
    </S.SideNav>
  );
};

export default Menu;
