import TimeSelection from "./components/TimeSelection/TimeSelection";
import { user } from './components/TimeSelection/mock.js'

export const TestComponent = () => (
    <>
        <TimeSelection user={user} />
    </>
)