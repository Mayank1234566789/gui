import React, { Component } from 'react';
import './Table.css'
import 'datatables.net'


const $ = require('jquery');
$.DataTable = require('datatables.net');



class Table extends Component { 
    componentDidMount() {
       /* $(this.refs.main).DataTable({
           dom: '<"data-table-wrapper"t>',
           data: this.props.names,
           columns,
           ordering: false
        });*/
        console.log(this.el)
        this.$el=$(this.el)
        this.$el.DataTable(
           
     
                {
                    paging:   true,
                    searching: false,
                    data: this.props.data,
                    columns: [
                        { title: "Name" },
                        { title: "Position" },
                        { title: "Office" },
                        { title: "Extn." },
                        { title: "Start date" },
                        { title: "Salary" }
                    ]
                }
      
        )

    }  
    componentWillUnmount(){
      /* $('.data-table-wrapper')
       .find('table')
       .DataTable()
       .destroy(true);*/
      
    }
    shouldComponentUpdate() {
       // return false;
    }
    render() {
        return (
            <div>
                <table id="example" class="table table-striped table-bordered" width="80%" ref={el =>this.el = el}></table>
            </div>);
    }
}

export default Table