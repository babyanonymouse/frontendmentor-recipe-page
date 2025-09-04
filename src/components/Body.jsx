import React from 'react'
import omelette from "../assets/images/image-omelette.jpeg"

const Body = () => {
    return (
        <div className='bg-white w-1/2 flex flex-col items-center justify-center rounded-3xl'>
            <div className='p-10 space-y-6'>
                <img src={omelette} alt="omelette" className='rounded-md' />

                <h1 className='text-4xl text-stone-900 font-normal font-young-serif'>Simple Omelette Recipe </h1>

                <p>An easy and quick dish, perfect for any meal. This
                    classic omelette combines beaten eggs cooked to perfection, optionally
                    filled with your choice of cheese, vegetables, or meats.</p>


                <div className='p-7 rounded-xl bg-rose-50'>
                    <h2 className='text-rose-800 font-semibold text-xl my-2'>Preparation time</h2>
                    <ul className='list-disc list-outside marker:text-rose-800 pl-7 space-y-1'>
                        <li className='pl-2'><strong>Total:</strong> Approximately 10 minutes</li>
                        <li className='pl-2'><strong>Preparation:</strong> 5 minutes</li>
                        <li className='pl-2'><strong>Cooking:</strong> 5 minutes</li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-brown-800 font-young-serif text-3xl my-3'>Ingredients</h2> <ul className='list-disc list-outside marker:text-brown-800 pl-5 space-y-2'>
                        <li className='pl-3'>2-3 large eggs</li>
                        <li className='pl-3'>Salt, to taste</li>
                        <li className='pl-3'>Pepper, to taste</li>
                        <li className='pl-3'>1 tablespoon of butter or oil</li>
                        <li className='pl-3'>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
                    </ul> </div>

                <div>
                    <h2 className='text-brown-800 font-young-serif text-3xl my-3'>Instructions</h2>
                    <ol className='list-decimal pl-5 marker:text-brown-800 space-y-2'>
                        <li><strong>Beat the eggs:</strong> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
                        <li><strong>Heat the pan:</strong> Place a non-stick frying pan over medium heat and add butter or oil.</li>
                        <li><strong>Cook the omelette:</strong> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
                        <li><strong>Add fillings (optional):</strong> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette. Fold and serve.</li>
                    </ol>
                </div>

                <div>
                    <h2 className='text-brown-800 font-young-serif text-3xl my-3'>Nutrition</h2>
                    <p>The table below shows nutritional values per serving without the additional fillings.</p>
                </div>
                <div>
                    <table className='table-auto min-w-full'>
                        <tbody className='divide-y divide-stone-150'>
                            <tr className=''>
                                <td className='p-2'>Calories</td>
                                <td className='p-2 text-brown-800'><strong>277kcal</strong></td>
                            </tr>
                            <tr className=''>
                                <td className='  p-2'>Carbs</td>
                                <td className=' p-2 text-brown-800'><strong>0g</strong></td>
                            </tr>
                            <tr className=''>
                                <td className='p-2'>Protein</td>
                                <td className='p-2 text-brown-800'><strong>20g</strong></td>
                            </tr>
                            <tr className=''>
                                <td className='p-2'>Fat</td>
                                <td className='p-2 text-brown-800'><strong>22g</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Body