export default function NationBox({nationNum, opacity}) {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href="." className='nationBox' style={{opacity}}>{nationNum}</a>
    );
}

