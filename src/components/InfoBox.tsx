import { type FC, type PropsWithChildren } from "react";

type InfoBoxProps = PropsWithChildren<{ 
    mode: 'hint' | 'warning';
}>

const InfoBox: FC<InfoBoxProps> = ({mode, children}) => {
   if (mode === 'hint') {
        return (
            <aside className="infobox">
                <p>{children}</p>
            </aside>
        )
    }

    return (
        <aside className="infobox infobox-warning warning--medium">
            <h2>Warning</h2>
            <p>{children}</p>
        </aside>
    )
}

export default InfoBox;