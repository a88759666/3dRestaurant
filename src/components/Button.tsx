type ButtonProps = {
  title: string;
  color?: string;
  bgColor?: string;
  bold?: boolean;
  onPress?: () => void;
  px?: string
}

export const Button:React.FC<ButtonProps>  = ({
  title,
  color = "text-black",
  bgColor = "bg-slate-50",
  bold = false,
  onPress,
  px
}) => {
  return (
   <div className={`p-[2vh] ${px} ${bgColor} rounded-2xl cursor-pointer hover:bg-slate-200 active:bg-blue-400`} onClick={onPress}>
      <h1 className={`text-center text-nowrap ${color} ${bold ? 'font-bold' : 'font-normal'}`}>
        {title}
      </h1>
   </div> 
  )
};
