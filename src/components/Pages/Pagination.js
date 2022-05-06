import {Row, Container,} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Pagination = ({pageIndex, pageSize, totalCount,}) => {
    
    const numbers = makeNumbers(pageIndex, totalCount)
    
    return (
        <Container>
          <Row>
              <div className='pagination'>
                {numbers.map((c, i) => {
                  return (
                      <Link key={i} to={`/${c}`}>{c}</Link>       
                  )
                })}
              </div>
          </Row>
        </Container>
    )
}


const makeNumbers = (start, end) => {
    let length =  end - start 
    if (length > 5) {
        return [start, start + 1, start + 2, '...' , end]
     }
}



export default Pagination