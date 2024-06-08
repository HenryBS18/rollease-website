interface PrimaryButtonProps {
  title: string
  width?: number
  height?: number
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const PrimaryButton = ({ title, width = 160, height = 40, onClick }: PrimaryButtonProps) => {
  const style = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <button style={style} className="bg-[#A2C90C] text-lg font-semibold rounded-3xl text-white" onClick={onClick}>
      {title}
    </button>
  )
}

export default PrimaryButton