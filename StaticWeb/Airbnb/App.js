import React from "react"
import AddHeader from "./components/Header"
import AddGrid from "./components/photoGrid"
import AddTxt from "./components/txt"
import Cards from "./components/Card"
import data from "./data"

export default function App() {
    
        const cards = data.map(item => {
        return (
            <Cards 
                key={item.id}
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots}
                location={item.location}
            />
        )
    })   


    return (
        <div>
            <AddHeader />
            <AddGrid />
            <AddTxt />
            <section className="cardSection">
                {cards}
            </section>
        </div>    
    )
    
}