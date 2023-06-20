import { Component, ChangeEventHandler } from 'react';
import './search-box.styles.css';

// const name: string = '1234561';

// const func: (a: string, b: number, c: boolean) => void = (a, b, c) => {}

// interface ISearchBoxProps {
//     className: string;
//     placeholder: string;
// }

// interface ISearchBoxProps {
//     onChangeHandler: (a: string) => void;
//     placeholder: string;
// }

type SearchBoxProps = {
    className: string,
    placeholder?: string;
    onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

// type CanadianAddress = {
//     street: string;
//     province: string;
// }

// type USAddress = {
//     street: string;
//     state: string;
// }

// type ItalianAddress = {
//     street: string;
//     region: string;
// }

// type Address = CanadianAddress | USAddress | ItalianAddress;

// const Address: Address = {
//     street: "",
//     state: "",
// }

const SearchBox = ({ className, placeholder, onChangeHandler, }: SearchBoxProps) => {
    return (
        <input 
        className={`search-box ${className}`} 
        type='search' 
        placeholder={placeholder} 
        onChange={onChangeHandler}/>
    );
};

export default SearchBox;