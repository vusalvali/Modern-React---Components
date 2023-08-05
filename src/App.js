import Accordion from "./components/Accordion";

function App() {
    const items = [
        {
            id: 'asasq',
            label:'Can I use React on a project?',
            content: 'You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want. '
        },
        {
            id: 'as24wdasq',
            label: 'Can I use JavaScript on a project?',
            content:'You can use Javascript on any project you want.You can use Javascript on any project you want.You can use Javascript on any project you want.You can use Javascript on any project you want.'
        },
        {
            id: 'ad32eqwsasq',
            label:'Can I use CSS on a project?',
            content: 'You can use CSS on any project you want.You can use CSS on any project you want.You can use CSS on any project you want.You can use CSS on any project you want.'
        }
    ]
  return <Accordion items={items} />
}

export default App;
