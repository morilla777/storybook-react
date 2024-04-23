import './MyLabel.css';

interface Props {
    /**
     * Text to display
     */
    label: string;

    /**
     * Label size
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';

    /**
     * Texto Capitalizado
     */
    allCaps?: boolean;

    /**
     * Color del texto del label
     */
    color?:  'text-primary' | 'text-secondary' | 'text-tertiary'

    /**
     * Color del texto del label
     */
    fontColor?: string;

    /**
     * Color del fondo del label
     */
    backgroundColor?: string;


}

/**
 * ! Todas son opcionales
 * 
 * allCaps: boolean
 * color: 'text-primary' | 'text-secondary' | 'text-tertiary',
 * fontColor?: string, texto del span
 */

export const MyLabel = ({
    label,
    size = 'normal',
    allCaps,
    color,
    fontColor,
    backgroundColor = 'transparent'
}: Props) => {
  return (
    <span className={`${ size } ${ color }`} style={ { color: fontColor, backgroundColor, textTransform: allCaps? 'capitalize' : 'none' }}>{ label }</span>
  )
}
