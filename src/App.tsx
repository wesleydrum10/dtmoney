import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';

Modal.setAppElement('#root')

export function App() {

  const[isNewTransactionsModal, setIsNewTransactionsModal] = useState(false)

  function handlesOpenNewTransactionsModal() {
    setIsNewTransactionsModal(true);
  }

  function handlesCloseNewTransactionsModal() {
    setIsNewTransactionsModal(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handlesOpenNewTransactionsModal  }/>
      <Dashboard />
      <Modal
        isOpen={isNewTransactionsModal}
        onRequestClose={handlesCloseNewTransactionsModal}
      >
        <h2>Cadastrar informação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}

