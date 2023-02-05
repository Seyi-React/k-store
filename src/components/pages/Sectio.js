import React from 'react';
import {AiOutlineRight} from 'react-icons/ai'


const Section = ()=> {

    return (
        <>
          <div>
            <div className="itk-div">
              <div>
                <li>
                    <a className="itk">
                        Home <AiOutlineRight className='arrow'/>
                    </a>
                </li>
              </div>
              <div>
                <li>
                    <a className="itk">
                       Fashion <AiOutlineRight className='arrow'/>
                    </a>
                </li>
              </div>
              <div>
                <li>
                    <a className="itk">
                        Mens Fashion <AiOutlineRight className='arrow'/>
                    </a>
                </li>
              </div>
              <div>
                <li>
                    <a className="itk">
                       Jewelry <AiOutlineRight className='arrow'/>
                    </a>
                </li>
              </div>
              <div>
                <li>
                    <a className="itk">
                       Necklace <AiOutlineRight className='arrow'/>
                    </a>
                </li>
              </div>
            </div>
              <div>
                <p className="itk-p">Cuban Link Chain With Cross Pendant Silver</p>
              </div>
          </div>
        
        </>
    )

}

export default Section;



// const api = async () => {

//   const [data,setData] = React.useState([]);

// const url = 'https://wwww.djhvnvbxvbvkvksfhg'

//   const fetch = await fetch(url);
//   const response = await response.json();
// } 


// setData(response);

{/* <div>
  {data.map(item => {
    const {name,id,email,} = item;
    return <div key={id}>
           
           <h1>{name}</h1>
           <p>{email}</p>
    
    </div>
  })}
</div> */}