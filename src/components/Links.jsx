export default function Link(props) {
    return (
        <div>
    <h3>Links</h3>
    <a href={props.links.github}>{props.links.github}</a>
            <br/>
    <a href={props.links.linkedin}>{props.links.linkedin}</a>
        </div>
)
}