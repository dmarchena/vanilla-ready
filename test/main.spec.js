document.ready(function() {
  document.getElementById('sandbox').innerHTML = "Yeah!";
});

var p = document.createElement('p');
p.id = 'sandbox';
document.body.appendChild(p);

QUnit.test( "document.ready callback", function( assert ) {
  var done = assert.async();
  document.ready(function() {
    assert.equal(document.getElementById('sandbox').innerHTML, "Yeah!", "executed!");
    done();
  });
});
