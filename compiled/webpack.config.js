'use strict';

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js', //this is the default name, so you can skip it
        //at this directory our bundle file will be available
        //make sure port 8090 is used when launching webpack-dev-server
        publicPath: 'http://localhost:8090/assets'
    },
    module: {
        loaders: [{
            //tell webpack to use jsx-loader for all *.jsx files
            test: /\.jsx$/,
            loader: 'jsx-loader?insertPragma=React.DOM&harmony'
        }]
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3dlYnBhY2suY29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxPQUFQLEdBQWlCO0FBQ2IsV0FBTyxnQkFETTtBQUViLFlBQVE7QUFDSixrQkFBVSxXQUROLEVBQ21CO0FBQ3ZCO0FBQ0E7QUFDQSxvQkFBWTtBQUpSLEtBRks7QUFRYixZQUFRO0FBQ0osaUJBQVMsQ0FDTDtBQUNJO0FBQ0Esa0JBQU0sUUFGVjtBQUdJLG9CQUFRO0FBSFosU0FESztBQURMLEtBUks7QUFpQmIsZUFBVztBQUNQO0FBQ0E7QUFDQSxpQkFBUztBQUhGLEtBakJFO0FBc0JiLGFBQVM7QUFDTCxvQkFBWSxDQUFDLEVBQUQsRUFBSyxLQUFMLEVBQVksTUFBWjtBQURQO0FBdEJJLENBQWpCIiwiZmlsZSI6IndlYnBhY2suY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZW50cnk6ICcuL3NyYy9pbmRleC5qcycsXG4gICAgb3V0cHV0OiB7XG4gICAgICAgIGZpbGVuYW1lOiAnYnVuZGxlLmpzJywgLy90aGlzIGlzIHRoZSBkZWZhdWx0IG5hbWUsIHNvIHlvdSBjYW4gc2tpcCBpdFxuICAgICAgICAvL2F0IHRoaXMgZGlyZWN0b3J5IG91ciBidW5kbGUgZmlsZSB3aWxsIGJlIGF2YWlsYWJsZVxuICAgICAgICAvL21ha2Ugc3VyZSBwb3J0IDgwOTAgaXMgdXNlZCB3aGVuIGxhdW5jaGluZyB3ZWJwYWNrLWRldi1zZXJ2ZXJcbiAgICAgICAgcHVibGljUGF0aDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA5MC9hc3NldHMnXG4gICAgfSxcbiAgICBtb2R1bGU6IHtcbiAgICAgICAgbG9hZGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vdGVsbCB3ZWJwYWNrIHRvIHVzZSBqc3gtbG9hZGVyIGZvciBhbGwgKi5qc3ggZmlsZXNcbiAgICAgICAgICAgICAgICB0ZXN0OiAvXFwuanN4JC8sXG4gICAgICAgICAgICAgICAgbG9hZGVyOiAnanN4LWxvYWRlcj9pbnNlcnRQcmFnbWE9UmVhY3QuRE9NJmhhcm1vbnknXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIGV4dGVybmFsczoge1xuICAgICAgICAvL2Rvbid0IGJ1bmRsZSB0aGUgJ3JlYWN0JyBucG0gcGFja2FnZSB3aXRoIG91ciBidW5kbGUuanNcbiAgICAgICAgLy9idXQgZ2V0IGl0IGZyb20gYSBnbG9iYWwgJ1JlYWN0JyB2YXJpYWJsZVxuICAgICAgICAncmVhY3QnOiAnUmVhY3QnXG4gICAgfSxcbiAgICByZXNvbHZlOiB7XG4gICAgICAgIGV4dGVuc2lvbnM6IFsnJywgJy5qcycsICcuanN4J11cbiAgICB9XG59Il19