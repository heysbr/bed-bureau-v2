export default function Error({ message }: { message: string }) {
  return (
    <div className="text-xs m-2 text-app-primary">{message}</div>
  )
}