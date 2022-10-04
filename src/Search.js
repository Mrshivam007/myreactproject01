import React, { useState } from "react";
import data from './data';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {Link} from 'react-router-dom';


const Search = () => {
    const [filter, setFilter] = useState('');

    const searchText = (event) => {
        setFilter(event.target.value);
    }
    let dataSearch = data.cardData.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    });
    return (

        <section className="py-4 container">
            <div className="row justify-content-center" style={{ backgroundColor: "#b6bee3", marginTop: '6vh', paddingTop: '18vh', paddingBottom: '30px', marginBottom: '34px'}}>

                <div className="col-12 mb-5">
                    <div className="mb-3 col-4 mx-auto text-center">
                        <input
                            text="text"
                            className="from-control" style={{ width: '30pc' }}
                            value={filter}
                            placeholder="Search what are you looking for?"
                            onChange={searchText.bind(this)}
                        />
                        <SearchOutlinedIcon style={{ marginLeft: '60vh', marginTop: '-8vh' }} />

                    </div>
                    <Link to='/login' class="btn btn-primary" role="button">Link</Link>

                </div>



                {dataSearch.map((item, index) => {
                    return (
                        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" style={{ width: '26%' }}>
                            <div className="card p-0 overflow-hidden h-100 shadow">
                                <img src={item.img} alt={""} className="card-img-top img-fluid" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </section>
    )

}

export default Search;