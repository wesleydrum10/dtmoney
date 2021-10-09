import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

//Posso usar uma interface...
/* interface TransactionInput {
  title: string;
  amount: number;
  type: string;
  category: string;
} */
//ou um type Omit passando uma interface existente que contenha os mesmos dados, omitindo, conforme abaixo... id e createdAt
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>
// ou um type Pick igual o Omit, só que devo passar os campos que quero usar.
//type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>

interface TransactionsProviderProps {
  children: ReactNode; // aceita qualquer tipo de conteudo válido para o React
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction:(transaction: TransactionInput) => void; 
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  function createTransaction(transaction: TransactionInput) {
    api.post('/transactions', transaction)
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}