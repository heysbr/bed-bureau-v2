export default function Error({ message }: { message: string }) {
  return (
    <div className="text-xs text-app-primary">{message}</div>
  )
}