import React, { Component } from 'react';
import {Tabs, Tab, DataTable, TableHeader, Grid, Cell, Button} from "react-mdl";

class dashboard extends Component{
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }
    onChangeCourse(){
        alert("sel");
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div >

                    <Grid className="category-content">

                        <Cell col={6} offset={3}>
                            <Button ripple>Button</Button>
                            <DataTable
                                style={{width: '100%', height: '350px', background: '#fff',marginTop:'100px'}}
                                selectable
                                shadow={0}
                                rowKeyColumn="id"
                                onSelectionChanged={this.onChangeCourse}
                                rows={[
                                    {id: 1001, material: 'Acrylic (Transparent)', quantity: 25, price: 2.90},
                                    {id: 1002, material: 'Plywood (Birch)', quantity: 50, price: 1.25},
                                    {id: 1003, material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35}
                                ]}
                            >
                                <TableHeader name="material" tooltip="The amazing material name">Material</TableHeader>
                                <TableHeader numeric name="quantity" tooltip="Number of materials">Quantity</TableHeader>
                                <TableHeader numeric name="price" cellFormatter={(price) => `\$${price.toFixed(2)}`} tooltip="Price pet unit">Price</TableHeader>
                            </DataTable>
                        </Cell>
                    </Grid>
                </div>
            )
        }
        else if(this.state.activeTab === 1){
            return(
                <div>

                </div>
            )
        }
        else if(this.state.activeTab === 2){
            return(
                <div>

                </div>
            )
        }
        else if(this.state.activeTab === 3){
            return(
                <div>

                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Year 1</Tab>
                    <Tab>Year 2</Tab>
                    <Tab>Year 3</Tab>
                    <Tab>Year 4</Tab>
                </Tabs>
                <section>
                    {this.toggleCategories()}
                </section>
            </div>
        );
    }
}

export default dashboard;