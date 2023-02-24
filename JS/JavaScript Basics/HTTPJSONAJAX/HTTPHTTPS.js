// HTTP (Hyper Text Transfer Protocol) is a protocol which allows fetching of resources like HTML documents.
// HTTP allows us to communicate with servers of outside world.

// HTTP work cycle = Client (browser) sends out a request (HTTP), Server understands HTTP and sends back the response (requested files).

// HTTP main words (GET, POST, PUT, DELETE).

// * GET = i want to get an HTML file;

// * POST = i want to post a file to servers/databases;

// * PUT = i'm gonna send some data to update already existing files in servers/databases;

// * DELETE = delete a piece of data on the servers/databases.

//SERVER responds with 2 main things:

// * number value (HTTP message);
// * data (HTML).



// query string is the first method to send data to the server (GET);
// sending data to server through form, after pressing register! We send out a query string:
// ?firstname=Andri&lastname=Suvorov&email=a%40gmail.com&password=password&birthday=1997-12-04&gender=male&cars=Porsche

// second method is through body, which use (POST) method:
// adds form data to server (not displaying query string at the link bar) and server can access it through form data (you can find it in Network tab).



// HTTPS (Hyper Text Transfer Protocol Secure) which is meant to secure passwords;
// HTTPS mean that communications between browser and server are now encrypted (only the Client and the Server know the secret password).