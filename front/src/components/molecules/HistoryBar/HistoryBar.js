import React from "react";
import { Breadcrumbs, Button, Fade } from "@material-ui/core";

export const HistoryBar = ({history}) => {
    console.log("Dentro de HistoryBar con el historial ->", history)
    console.log("La longitud del array es ->", history.length)
    let historybar
    if (history.length < 5) {
        historybar = <Breadcrumbs>
            {history.map((word) => (
                <Button variant="outlined">{word}</Button>
            ))}
        </Breadcrumbs>
    } else {
        let position = 0
        let correctPosition = history.length - 4
        history.map((word) => {
            if (position > correctPosition) {

            }
            }
        )
    }

    return historybar
}

