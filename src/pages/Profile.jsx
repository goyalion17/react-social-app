const posts = [
  { id: 1, text: 'Hi, how are you?', likes: 12 },
  { id: 2, text: 'It is my first post.', likes: 5 },
];

const Profile = () => {
  return (
    <section className="profile">
      <img
        className="profile__cover"
        src="https://picsum.photos/seed/cover/960/240"
        alt="Profile cover"
      />

      <div className="profile__info">
        <img
          className="profile__avatar"
          src="https://picsum.photos/seed/avatar/160/160"
          alt="Profile avatar"
        />
        <div className="profile__bio">
          <h2>Jane Doe</h2>
          <p>Frontend engineer, plant lover, coffee enthusiast.</p>
        </div>
      </div>

      <div className="profile__posts">
        <h3>My posts</h3>
        <form className="profile__new-post" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="new-post">New post</label>
          <input id="new-post" name="new-post" type="text" placeholder="What's on your mind?" />
          <button type="submit">Send</button>
        </form>
        <ul className="profile__post-list">
          {posts.map((post) => (
            <li key={post.id} className="profile__post">
              <span>{post.text}</span>
              <span aria-label="likes">{post.likes} likes</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Profile;
