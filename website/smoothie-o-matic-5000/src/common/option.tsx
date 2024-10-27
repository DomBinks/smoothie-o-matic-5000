import Button from 'react-bootstrap/Button';

export function Option({name, endpoint, addHistory}:
    {name: string, endpoint:string, addHistory: () => void}){
    return(
        <>
            <div className='option'>
                <h1>{name}</h1>
                <Button variant="success" size="lg"
                    onClick={() => {addHistory(); onClick(endpoint)}}>
                    ADD
                </Button>{' '}
            </div>
        </>
    )
}

function onClick(endpoint: string) {
   fetch("http://192.168.0.12:5000"+endpoint, {
    method: 'POST',
   })
    return
}