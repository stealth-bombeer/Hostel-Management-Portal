import { useState,useEffect } from "react"; 

const Blocks = () => {

  const [block, setBlock]=useState('');
  const [floor, setFloor]=useState('');
  const [room, setRoom]=useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(block,floor,room);

  
  }

    return ( 
      <>

    <form className="form" id="form1" onSubmit={handleSubmit}>
      



      <div className="wrap-input100">
                            <label>Blocks:</label>
                            <br/>
                            
                            <select
                                  value={block}
                                  onChange={(e) => setBlock(e.target.value)}
                                    id="branches"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  >
                                    <option selected="">Choose your Block number</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                    <option value="D">D</option>
                                    <option value="E">E</option>
                                    <option value="F">F</option>
                
                            </select>
                          </div>
                          <div className="wrap-input100">
                            <label>Choose your floor number:</label>
                            <br/>
                            
                            <select
                                  value={floor}
                                  onChange={(e) => setFloor(e.target.value)}
                                    id="branches"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  >
                                    <option selected="">Choose your floor number</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                
                            </select>
                          </div>
                          <div className="wrap-input100">
                            <label>Choose your Room no.:</label>
                            <br/>
                            
                            <select
                                  value={room}
                                  onChange={(e) => setRoom(e.target.value)}
                                    id="branches"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  >
                                    <option selected="">Choose your Room number</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>

                
                            </select>


                            

                            <button
                            onClick={handleSubmit}
                            type="submit"
                            className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              >
                            Submit
                            </button>
                                            

                          </div>

   </form>
    </>
    
     );
}
 
export default Blocks;