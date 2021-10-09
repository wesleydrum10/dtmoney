import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsContext } from "./TransactionsContext";

Modal.setAppElement('#root')

export function App() {

  const[isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false)

  function handlesOpenNewTransactionsModal() {
    setIsNewTransactionsModalOpen(true);
  }

  function handlesCloseNewTransactionsModal() {
    setIsNewTransactionsModalOpen(false);
  }

  return (
    <TransactionsContext.Provider value={[]}>
      <Header onOpenNewTransactionModal={handlesOpenNewTransactionsModal  }/>
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handlesCloseNewTransactionsModal}
      />
      <GlobalStyle />
    </TransactionsContext.Provider>
  );
}

