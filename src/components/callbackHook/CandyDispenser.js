import React, { useCallback, useState } from 'react'

function CandyDispenser() {
    const initialCandies = ['snickers', 'skittles', 'twix', 'milky way'];
    const [candies, setCandies] = useState(initialCandies);
    const dispense = candy => {
        setCandies(allCandies => allCandies.filter(c => c !== candy))
    }

    // const dispense = useCallback(candy => {
    //     setCandies(allCandies => allCandies.filter(c => c !== candy))
    // }, [])

  return (
    <div>
        <h1>Candy Dispenser</h1>
        <div>Available Candy</div>
        {candies.length === 0 ? (
            <button onClick={() => setCandies(initialCandies)}>Refill</button>
        ) : (
            <ul>
                {candies.map(candy => (
                    <li key={candy}>
                        <button onClick={() => dispense(candy)}>grab</button> {candy}
                    </li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default CandyDispenser
