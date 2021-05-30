# Invalid hook call sample

The main project is dependent on the project external which exports a React hook which uses `useState`. It's using webpack to bundle the project into the dist folder and it's specified to use the bundled output as `main` in `package.json`. Main is then using that hook in the component App. When running the application the error "Invalid hook call" is shown.