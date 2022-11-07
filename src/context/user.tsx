import React, {
  createContext,
  useState,
  type PropsWithChildren,
  type Dispatch,
  type SetStateAction,
} from 'react';
import type {
  Canvas,
  CanvasDimensions,
  CanvasParams,
} from '@app/types/navigation';

export interface CardInformation {
  card_number: string;
  exp_date: string;
  cvv: string;
  fullName: string;
}

export interface User {
  email: string;
  user: string;
  card_information: CardInformation;
}

export interface UserWithPassword extends Omit<User, 'card_information'> {
  password: string;
}

export interface CartItem
  extends Omit<CanvasParams, 'dimensions' | 'dimension_index'>,
    CanvasDimensions {}

export interface CartItems {
  item: CartItem;
  count: number;
}

export interface UserContext {
  data: User;
  cart: CartItems[];
  setData: Dispatch<SetStateAction<User>>;
  setCart: Dispatch<SetStateAction<CartItems[]>>;
}

export const initial: UserContext = {
  data: {
    email: '',
    user: '',
    card_information: {
      card_number: '',
      exp_date: '',
      cvv: '',
      fullName: '',
    },
  },
  cart: [],
  setCart: () => void 0,
  setData: () => void 0,
};

export const ExampleUser: UserWithPassword = {
  email: 'ilanarellano15@gmail.com',
  user: 'ExampleUser123',
  password: 'Mypassword123.',
};

export const UserContext = createContext(initial);

export const UserContextProvider = ({children}: PropsWithChildren) => {
  const [data, setData] = useState<User>(() => initial.data);
  const [cart, setCart] = useState<CartItems[]>([]);

  return (
    <UserContext.Provider value={{data, setData, cart, setCart}}>
      {children}
    </UserContext.Provider>
  );
};
