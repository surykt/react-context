import { createContext, useState } from "react";

const PagamentoContext = createContext();
const [formaPagamento, setFormaPagamento] = useState(tiposPagamento[0]);

const tiposPagamento = [
  {
    nome: "Boleto",
    juros: 1,
    id: 1,
  },
  {
    nome: "Cartão de Crédito",
    juros: 1.3,
    id: 2,
  },
  {
    nome: "PIX",
    juros: 1,
    id: 3,
  },
  {
    nome: "Crediário",
    juros: 1.5,
    id: 4,
  },
];

export const PagamentoProvider = ({ children }) => {
  return (
    <PagamentoContext.Provider
      value={{ tiposPagamento, formaPagamento, setFormaPagamento }}
    >
      {children}
    </PagamentoContext.Provider>
  );
};
