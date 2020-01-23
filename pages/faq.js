import Layout from '../components/Layout';

const Faq = () => (
  <div>
    <Layout>
      <div className="faq-container">
        <h1 className="faq-title">Foire Aux Questions</h1>
        <h2 className="faq-question">Question 1</h2>
        <p className="faq-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ipsum orci, tristique ut tortor ut, mollis commodo ex. Nullam fringilla sagittis euismod. Nunc euismod dui justo, quis porta eros venenatis gravida. Fusce ut mauris velit. Morbi ac eros sagittis, placerat ante pellentesque, consequat erat. Maecenas at erat augue. Donec ullamcorper nunc id ipsum ultrices rutrum. Donec molestie, erat vel sodales vehicula, mauris augue malesuada eros, at rutrum nisi erat sed leo. Sed vestibulum elit quis vehicula feugiat. Donec id felis eget augue fringilla congue vel ac libero. Morbi pulvinar tempor metus ut gravida. Etiam ante augue, posuere ut nulla at, placerat pulvinar quam.</p>
        <h2 className="faq-question">Question 2</h2>
        <p className="faq-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ipsum orci, tristique ut tortor ut, mollis commodo ex. Nullam fringilla sagittis euismod. Nunc euismod dui justo, quis porta eros venenatis gravida. Fusce ut mauris velit. Morbi ac eros sagittis, placerat ante pellentesque, consequat erat. Maecenas at erat augue. Donec ullamcorper nunc id ipsum ultrices rutrum. Donec molestie, erat vel sodales vehicula, mauris augue malesuada eros, at rutrum nisi erat sed leo. Sed vestibulum elit quis vehicula feugiat. Donec id felis eget augue fringilla congue vel ac libero. Morbi pulvinar tempor metus ut gravida. Etiam ante augue, posuere ut nulla at, placerat pulvinar quam.</p>
        <h2 className="faq-question">Question 3</h2>
        <p className="faq-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ipsum orci, tristique ut tortor ut, mollis commodo ex. Nullam fringilla sagittis euismod. Nunc euismod dui justo, quis porta eros venenatis gravida. Fusce ut mauris velit. Morbi ac eros sagittis, placerat ante pellentesque, consequat erat. Maecenas at erat augue. Donec ullamcorper nunc id ipsum ultrices rutrum. Donec molestie, erat vel sodales vehicula, mauris augue malesuada eros, at rutrum nisi erat sed leo. Sed vestibulum elit quis vehicula feugiat. Donec id felis eget augue fringilla congue vel ac libero. Morbi pulvinar tempor metus ut gravida. Etiam ante augue, posuere ut nulla at, placerat pulvinar quam.</p>
        <h2 className="faq-question">Question 4</h2>
        <p className="faq-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ipsum orci, tristique ut tortor ut, mollis commodo ex. Nullam fringilla sagittis euismod. Nunc euismod dui justo, quis porta eros venenatis gravida. Fusce ut mauris velit. Morbi ac eros sagittis, placerat ante pellentesque, consequat erat. Maecenas at erat augue. Donec ullamcorper nunc id ipsum ultrices rutrum. Donec molestie, erat vel sodales vehicula, mauris augue malesuada eros, at rutrum nisi erat sed leo. Sed vestibulum elit quis vehicula feugiat. Donec id felis eget augue fringilla congue vel ac libero. Morbi pulvinar tempor metus ut gravida. Etiam ante augue, posuere ut nulla at, placerat pulvinar quam.</p>
        <h2 className="faq-question">Question 5</h2>
        <p className="faq-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ipsum orci, tristique ut tortor ut, mollis commodo ex. Nullam fringilla sagittis euismod. Nunc euismod dui justo, quis porta eros venenatis gravida. Fusce ut mauris velit. Morbi ac eros sagittis, placerat ante pellentesque, consequat erat. Maecenas at erat augue. Donec ullamcorper nunc id ipsum ultrices rutrum. Donec molestie, erat vel sodales vehicula, mauris augue malesuada eros, at rutrum nisi erat sed leo. Sed vestibulum elit quis vehicula feugiat. Donec id felis eget augue fringilla congue vel ac libero. Morbi pulvinar tempor metus ut gravida. Etiam ante augue, posuere ut nulla at, placerat pulvinar quam.</p>
      </div>
    </Layout>
    <style jsx>
      {`
      .faq-container {
        margin-top: 80px;
    }
      .faq-title {
        margin: 0 auto;
        text-align: center;
        font-size: 3em;
        margin-bottom: 20px;
        text-transform: uppercase;
        font-weight: bold;
        text-shadow: 0 1px 2px rgba(black,.15);
      }
      .faq-question {
        color: #e74c3c;
        margin: 0 auto;
        text-align: center;
        font-size: 3em;
        margin-bottom: 10px;
        font-weight: bold;
        text-shadow: 0 1px 2px rgba(black,.15);
    }
      .faq-text {
        text-align: justify;
        font-size: 2em;
        margin: 10px;
        padding: 50px;
    }
    `}
    </style>

  </div>
);

export default Faq;
