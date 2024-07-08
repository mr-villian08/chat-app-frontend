export default class useApis {
  static baseUrl = import.meta.env.VITE_APP_API_URL;
  static defaultHeaders = {
    "content-type": "application/json",
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
    "Content-Security-Policy": "directive 'source';",
    "X-Frame-Options": "SAMEORIGIN",
    "ACCESS-CONTROL-ALLOW-ORIGIN": "*",
  };

  // ? *************************************************************** Post Request *************************************************************** */
  static async post(url, isToken = true, formData = null, headers = null) {
    try {
      const response = await fetch(`${this.baseUrl}${url}`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: this.config(url, isToken, headers),
      });

      if (!response.ok) {
        console.log(response.statusText, "on use api");
        throw new Error("Something went wrong. Try again!");
      }

      return await response.json();
    } catch (error) {
      return error;
    }
  }

  // ? *************************************************************** Get Request *************************************************************** */
  static async get(url, isToken = true, headers = null) {
    try {
      const response = await fetch(`${this.baseUrl}${url}`, {
        method: "GET",
        headers: this.config(url, isToken, headers),
      });

      if (!response.ok) {
        throw new Error("Something went wrong. Try again!");
      }

      return await response.json();
    } catch (error) {
      return error;
    }
  }

  // ? *************************************************************** Update Request *************************************************************** */
  static async update(url, isToken = true, formData, headers = null) {
    try {
      const response = await fetch(`${this.baseUrl}${url}`, {
        method: "PATCH",
        data: JSON.stringify(formData),
        headers: this.config(url, isToken, headers),
      });

      if (!response.ok) {
        throw new Error("Something went wrong. Try again!");
      }

      return await response.json();
    } catch (error) {
      return error;
    }
  }

  // ? *************************************************************** Delete Request *************************************************************** */
  static async delete(url, isToken = true, headers = null) {
    try {
      const response = await fetch(`${this.baseUrl}${url}`, {
        method: "DELETE",
        headers: this.config(url, isToken, headers),
      });

      if (!response.ok) {
        throw new Error("Something went wrong. Try again!");
      }

      return await response.json();
    } catch (error) {
      return error;
    }
  }

  // ? *************************************************************** Configuration of headers and parameters *************************************************************** */
  static config(url, isToken = true, headers = null) {
    try {
      const apiKeyName = import.meta.env[
        `VITE_APP_${url
          .split("/")[0]
          .split("?")[0]
          .toUpperCase()
          .replace(/-/g, "_")
          .trim()}_API_KEY`
      ];

      this.defaultHeaders = { ...this.defaultHeaders, "x-api-key": apiKeyName };

      if (isToken) {
        const token = localStorage.getItem("token");
        if (token === null) {
          throw new Error("Access denied. Try to login again!");
        }
        this.defaultHeaders = {
          ...this.defaultHeaders,
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        };
      }

      if (headers !== null) {
        this.defaultHeaders = { ...this.defaultHeaders, ...headers };
      }

      return this.defaultHeaders;
    } catch (error) {
      return error;
    }
  }
}
