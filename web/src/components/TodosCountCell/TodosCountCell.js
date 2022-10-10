export const QUERY = gql`
  query TodosCountQuery {
    todosCount
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ todosCount }) => {
  return <div>{JSON.stringify(todosCount)}</div>
}
