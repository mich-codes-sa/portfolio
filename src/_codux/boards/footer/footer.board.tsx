import { createBoard } from '@wixc3/react-board';
import { Footer } from '../../../components/footer/footer';

export default createBoard({
    name: 'Footer',
    Board: () => <Footer />,
    environmentProps: {
        canvasWidth: 1242,
        canvasHeight: 60,
        windowWidth: 1316,
    },
});
