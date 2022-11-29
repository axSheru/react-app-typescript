import { ProductCard } from "../components/ProductCard";

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    image: './coffee-mug.png'
};

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping store</h1>
            <hr />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}
            >
                <ProductCard product={ product }/>
            </div>
        </div>
    );
};
