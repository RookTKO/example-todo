import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import TodosCountCell from 'src/components/TodosCountCell'
const CountPage = () => {
  return (
    <>
      <MetaTags title="Count" description="Count page" />

      <h1>CountPage</h1>
      <p>
        ToDos Count: <TodosCountCell />
      </p>
    </>
  )
}

export default CountPage
