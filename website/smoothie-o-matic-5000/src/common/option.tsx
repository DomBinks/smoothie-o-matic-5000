import Button from 'react-bootstrap/Button';

export function Option({name, endpoint, addHistory}:
    {name: string, endpoint:string, addHistory: () => void}){
    return(
        <>
            <h1>{name}</h1>
            <Button variant="primary" size="lg"
                onClick={() => {addHistory(); onClick(endpoint)}}>
                ADD
            </Button>{' '}
        </>
    )
}

function onClick(endpoint: string) {
    fetch(endpoint, )
    return
}