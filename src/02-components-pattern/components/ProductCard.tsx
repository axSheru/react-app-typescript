import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useProduct } from "../hooks/useProduct";
import { createContext, ReactElement, useContext } from "react";

interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
};

interface Product {
    id: string;
    title: string;
    image?: string;
};

interface ProductContextProps {
    counter: number;
    increaseBy: ( value: number ) => void;
    product: Product;
};

const ProductContext = createContext( {} as ProductContextProps );
const { Provider } = ProductContext;

export const ProductImage = ({ image = '' }) => {

    const { product } = useContext( ProductContext );
    let imageToShow: string;

    if ( image ) {
        imageToShow = image;
    } else if ( product.image ) {
        imageToShow = product.image;
    } else {
        imageToShow = noImage;
    }

    return (
        <img className={ styles.productImg } src={ imageToShow } alt="Product image" />
    );
};

export const ProductTitle = ({ title }: { title?: string }) => {
    const { product } = useContext( ProductContext );

    return (
        <span className={ styles.productDescription }>{ title ?? product.title }</span>
    );
};

interface ProductButtonsProps {
    counter: number;
    increaseBy: ( value: number ) => void;
};

export const ProductButtons = () => {
    const { counter, increaseBy } = useContext( ProductContext );

    return (
        <div className={ styles.buttonsContainer }>
            <button
                className={ styles.buttonMinus }
                onClick={ () => increaseBy( -1 ) }
            >
                -
            </button>
            <div className={ styles.countLabel }>{ counter }</div>
            <button
                className={ styles.buttonAdd }
                onClick={ () => increaseBy( 1 ) }
            >
                +
            </button>
        </div>
    );
};

export const ProductCard = ({ children, product }: Props) => {

    const { counter, increaseBy } = useProduct();
    
    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={ styles.productCard }>
                {/* <ProductImage image={ product.image } />

                <ProductTitle title={ product.title } />

                <ProductButtons counter={ counter } increaseBy={ increaseBy } /> */}
                {
                    children
                }
            </div>
        </Provider>
    );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
