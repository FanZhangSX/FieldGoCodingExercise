import React, { Component } from 'react';
import ItemSharp from "./ItemShape";
import ItemDensity from "./ItemDensity";
import { Table } from "reactstrap";
import ItemFilter from './ItemFilter';
import GetShape from '../Functions/GetShape';
import GetDensity from '../Functions/GetDensity';
import './Panel.css';

export default class Panel extends Component {
    static displayName = Panel.name;

    constructor(props) {
        super(props);
        this.state = {
            defaultItems: [],
            items: [],
            loading: false,
            filterStr: "",
            orderField: "",
            isDesc: false
        };
        this.transFilterStr = this.transFilterStr.bind(this);
    }
    componentDidMount = () => {
        this.setState({ isLoading: true });

        fetch('api/SampleData/GetItems')
            .then((response) => {
                if (response.status === 200) {
                    response.json()
                        .then((respData) => {
                            this.setState({ defaultItems: respData, items: respData, isLoading: false });
                        })
                }

            })
            .catch((error) => {
                console.log(error);
            })
    }

    onRowClickedHandler(item) {
        this.props.transSelectedItem(item);
    }

    transFilterStr(filterStr) {
        this.setState({ filterStr: filterStr });

        const filteredItems = this.state.defaultItems.filter((item) => {
            if (item.name.search(filterStr) !== -1
                || GetShape(item).search(filterStr) !== -1
                || GetDensity(item).toString().search(filterStr) !== -1
            ) {
                console.log("item", item);
                return item;
            }
            return null;
        });

        this.setState({ items: filteredItems });
    }

    compareBy(key) {
        return function (a, b) {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        };
    }
    compareByDesc(key) {
        return function (a, b) {
            if (a[key] < b[key]) return 1;
            if (a[key] > b[key]) return -1;
            return 0;
        };
    }

    sortBy(key) {
        let arrayCopy = [...this.state.items];
        let isDesc = this.state.isDesc;
        if (isDesc) {
            arrayCopy.sort(this.compareBy(key));
        } else {
            arrayCopy.sort(this.compareByDesc(key));
        }

        this.setState({ items: arrayCopy, isDesc: !isDesc });
    }

    renderItemsTable(items) {
       return (
            <Table hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th onClick={()=>this.sortBy('name')}>Name <span></span></th>
                        <th>Shape <span></span></th>
                        <th>Density <span></span></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) =>
                        <tr key={item.name} onClick={() => this.onRowClickedHandler(item)}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td><ItemSharp item={item} /></td>
                            <td><ItemDensity item={item} /></td>
                        </tr>
                    )}
                </tbody>
            </Table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderItemsTable(this.state.items);

        return (
            <div>
                <h1>Items view</h1>
                <ItemFilter transFilterStr={this.transFilterStr} />
                
                {contents}
            </div>
        );
    }
}
