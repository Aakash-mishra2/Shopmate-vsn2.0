import StoreItem from './storeItem';
import Header from './Header';
import Footer from './Footer';
import './styles/listStore.css';

const ListStore = () => {

    const lists = [
        {
            id: 'c1',
            date: '23 June',
            items: ["milk", "curd", "eggs"]
        },
        {
            id: 'c2',
            date: '25 June',
            items: ["tomato", "spinach"]
        }
    ]

    return (

        <div>
            <Header />
            {lists.map((item) => (
                <StoreItem
                    id={item.id}
                    date={item.date}
                    things={item.items}
                />
            )
            )}
            <Footer />
        </div>
    )
};

export default ListStore;