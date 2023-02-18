import { Table } from './Table';
import { Ball } from './Ball';
import { useBox } from '@react-three/cannon';


export function TableBallInteraction() {

    const [ref1, api1] = useBox(() => ({
        type: 'Box',
        args: [1, 1, 1],
        position: [0, 0, 0],
        onCollide: () => console.log('Models collide!')
    }));

    return (
        <div>
            <Table />
            <Ball />
        </div>
    );
}